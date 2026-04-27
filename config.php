<?php
$conn = mysqli_connect("localhost", "root", "basdat2024", "crud_native");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>