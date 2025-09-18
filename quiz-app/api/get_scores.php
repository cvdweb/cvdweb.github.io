<?php
ini_set('display_errors', 0);
error_reporting(0);
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

function clean_student_name($name) {
    // Remove leading number and date if present, e.g., "2. Phan Thị Kim Anh 24/05/2012" -> "Phan Thị Kim Anh"
    if (preg_match('/^\d+\.\s*(.+?)\s*\d{2}\/\d{2}\/\d{4}$/', $name, $matches)) {
        return trim($matches[1]);
    }
    return $name;
}

$scoresFile = '../data/scores.json';
$scores = [];
if (file_exists($scoresFile)) {
    $scores = json_decode(file_get_contents($scoresFile), true) ?: [];
}

// Format the data for the table
$tableData = [];
$classCounts = [];
$tx1Count = 0;
$tx2Count = 0;
foreach ($scores as $key => $student) {
    $className = str_replace('tin_hoc_', '', $student['class_name']);
    $fullName = isset($student['ho_ten']) ? $student['ho_ten'] : (isset($student['ho']) ? clean_student_name($student['ho']) . ' ' . ($student['ten'] ?? '') : 'Unknown');
    $tableData[] = [
        'class' => $className,
        'name' => $fullName,
        'tx1' => $student['tx1_score'],
        'tx2' => $student['tx2_score']
    ];
    if (!isset($classCounts[$className])) {
        $classCounts[$className] = 0;
    }
    $classCounts[$className]++;
    if ($student['tx1_score'] !== null) {
        $tx1Count++;
    }
    if ($student['tx2_score'] !== null) {
        $tx2Count++;
    }
}

$response = [
    'totalTested' => count($tableData),
    'classCounts' => $classCounts,
    'tx1Count' => $tx1Count,
    'tx2Count' => $tx2Count,
    'data' => $tableData
];

echo json_encode($response);
?>
