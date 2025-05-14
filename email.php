<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Autoload PHPMailer
require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sepet verilerini al
    $productNames = $_POST['productNames'];
    $totalPrice = $_POST['totalPrice'];

    // E-posta gönderme için PHPMailer kullan
    $mail = new PHPMailer(true);

    try {
        // Sunucu ayarları
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // GMail SMTP sunucusu
        $mail->SMTPAuth = true;
        $mail->Username = 'yusufceylan2291@gmail.com'; // GMail adresinizi buraya girin
        $mail->Password = 'Yc544936'; // GMail şifrenizi buraya girin
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Gönderen ve alıcı bilgileri
        $mail->setFrom('hlb@gmail.com', 'Web Siteniz');
        $mail->addAddress('yusufceylan2291@gmail.com');  // Alıcı e-posta adresi

        // İçerik
        $mail->isHTML(true);
        $mail->Subject = 'Yeni Satın Alma';
        $bodyContent = "Yeni satın alma işlemi: <br><br>";
        
        foreach ($productNames as $product) {
            $bodyContent .= $product . "<br>";
        }

        $bodyContent .= "<br>Toplam Fiyat: " . $totalPrice . " HL";
        $mail->Body = $bodyContent;

        // E-postayı gönder
        $mail->send();
        echo 'E-posta başarıyla gönderildi!';
    } catch (Exception $e) {
        echo "E-posta gönderilemedi. Hata: {$mail->ErrorInfo}";
    }
}
?>

