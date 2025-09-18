<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
}

$className = $data['className'] ?? '';
$studentName = $data['studentName'] ?? '';
$part = $data['part'] ?? '';
$score = $data['score'] ?? null;

if (!$className || !$studentName || !$part || $score === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Use full student name as is without parsing
$ho = $studentName;
$ten = '';

// Load existing scores
$scoresFile = '../data/scores.json';
$scores = [];
if (file_exists($scoresFile)) {
    $scores = json_decode(file_get_contents($scoresFile), true) ?: [];
}

// Find or create student entry
$key = $className . '_' . $ho . '_' . $ten;
if (!isset($scores[$key])) {
    $scores[$key] = [
        'class_name' => $className,
        'ho' => $ho,
        'ten' => $ten,
        'ho_ten' => trim($ho . ' ' . $ten),
        'tx1_score' => null,
        'tx2_score' => null
    ];
}

$scores[$key][$part === 'TX1' ? 'tx1_score' : 'tx2_score'] = $score;

// Save back
if (file_put_contents($scoresFile, json_encode($scores, JSON_PRETTY_PRINT))) {
    echo json_encode(['message' => 'Điểm số đã được lưu thành công!']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save score']);
}
?>
