<?php
ini_set('display_errors', 0);
error_reporting(0);
ini_set('memory_limit', '4096M');
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

function clean_student_name($name) {
    // Remove leading number and date if present, e.g., "2. Phan Thị Kim Anh 24/05/2012" -> "Phan Thị Kim Anh"
    if (preg_match('/^\d+\.\s*(.+?)\s*\d{2}\/\d{2}\/\d{4}$/', $name, $matches)) {
        return trim($matches[1]);
    }
    return $name;
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo 'Method not allowed';
    exit;
}

$code = $_GET['code'] ?? '';
if (!$code) {
    http_response_code(400);
    echo 'Missing code parameter';
    exit;
}

$scoresFile = '../data/scores.json';

// Load scores
$scores = [];
if (file_exists($scoresFile)) {
    $scores = json_decode(file_get_contents($scoresFile), true) ?: [];
}

// Group scores by class
$classData = [];
foreach ($scores as $key => $student) {
    $className = $student['class_name'];
    if (!isset($classData[$className])) {
        $classData[$className] = [];
    }
    $classData[$className][] = $student;
}

// Create new spreadsheet
$spreadsheet = new \PhpOffice\PhpSpreadsheet\Spreadsheet();

$classesToExport = [];
if (strtolower($code) === 'all') {
    $classesToExport = array_keys($classData);
} else {
    $className = 'tin_hoc_' . strtolower($code);
    if (!isset($classData[$className])) {
        http_response_code(404);
        echo 'Class not found: ' . $className;
        exit;
    }
    $classesToExport = [$className];
}

$firstSheet = true;
foreach ($classesToExport as $className) {
    if ($firstSheet) {
        $worksheet = $spreadsheet->getActiveSheet();
        $firstSheet = false;
    } else {
        $worksheet = $spreadsheet->createSheet();
    }
    $worksheet->setTitle($className);

    // Set headers
    $worksheet->setCellValue('A1', 'STT');
    $worksheet->setCellValue('B1', 'Ho Ten');
    $worksheet->setCellValue('C1', 'Diem TX1');
    $worksheet->setCellValue('D1', 'Diem TX2');

    $row = 2;
    $stt = 1;
    foreach ($classData[$className] as $student) {
        $fullName = isset($student['ho_ten']) ? $student['ho_ten'] : (isset($student['ho']) ? clean_student_name($student['ho']) . ' ' . ($student['ten'] ?? '') : 'Unknown');
        $worksheet->setCellValue('A' . $row, $stt);
        $worksheet->setCellValue('B' . $row, $fullName);
        $worksheet->setCellValue('C' . $row, $student['tx1_score'] !== null ? $student['tx1_score'] : '-');
        $worksheet->setCellValue('D' . $row, $student['tx2_score'] !== null ? $student['tx2_score'] : '-');
        $row++;
        $stt++;
    }
}

// Output
header('Content-Type: application/vnd.ms-excel');
header('Content-Disposition: attachment; filename="ket_qua_' . $code . '.xls"');
header('Cache-Control: max-age=0');

$writer = IOFactory::createWriter($spreadsheet, 'Xls');
$writer->save('php://output');
?>
