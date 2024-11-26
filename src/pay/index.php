<?php 
$ordid = $_GET['o'];
$license = '88525916814';
$orderdetail=getclientorderdetail($license,$ordid);

$data = array();
$data['s'] = $orderdetail->LicenseNumber;
$data['amount'] = $orderdetail->TotalAmount;
$data['client'] = urlencode($orderdetail->Name);
$data['mobile'] = $orderdetail->Contact;
$data['email'] = $orderdetail->Email;
$data['ordernumber'] = $orderdetail->Number;
$data['orderid'] = $orderdetail->_id;
$data = json_encode($data);

$curl = curl_init();
$url = "https://api.bytepaper.com/social/payment/payapi.php";
curl_setopt($curl,CURLOPT_URL,$url);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
curl_setopt($curl,CURLOPT_POST,1);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
$response = curl_exec($curl);
curl_close($curl);
$response = json_decode($response);  

function getclientorderdetail($license,$orderid)
{
    $data['LicenseNumber'] = $license; 
    $data['OrderID']   = $orderid;
    $data = json_encode($data);
    
    $curl = curl_init();
    $url = 'https://api.bytepaper.com/sales/website/getclientorderdetail';
    curl_setopt($curl,CURLOPT_URL,$url);
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($curl,CURLOPT_POST,1);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl,CURLOPT_POSTFIELDS,$data);
    $response = curl_exec($curl);
    curl_close($curl);
    $response = json_decode($response);    
    if($response->ApiResponse=='Success')
    {
        return $response;
    }    
    else
    {
        return "";
    } 
}


?>

<script type="text/javascript">
    window.location = "<?php echo $response->URL ?>";
</script>