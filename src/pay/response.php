<?php 

$orderid = $_GET['o'];
$license = '47757954399';

$orderdetail=getclientorderdetail($license,$orderid);

$paysts = $orderdetail->PaymentStatus;

if($_POST['code']=="PAYMENT_SUCCESS")
{
	if($orderdetail->_id==$orderid)
	{
	   $paysts = "Paid";
		
		$dataobj = array();
		$dataobj['LicenseNumber'] = $orderdetail->LicenseNumber;
		$dataobj['OrderID'] = $orderid;
		$dataobj['PaymentStatus'] = 'Paid';
		$dataobj['PaymentTransId'] = $_POST['transactionId'];
		
		$dataobj = json_encode($dataobj);

		$curl = curl_init();

		curl_setopt_array($curl, array(
		  CURLOPT_URL => 'https://api.bytepaper.com/sales/website/updateorder',
		  CURLOPT_RETURNTRANSFER => true,
		  CURLOPT_ENCODING => '',
		  CURLOPT_MAXREDIRS => 10,
		  CURLOPT_TIMEOUT => 0,
		  CURLOPT_FOLLOWLOCATION => true,
		  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		  CURLOPT_CUSTOMREQUEST => 'POST',
		  CURLOPT_POSTFIELDS =>$dataobj,
		  CURLOPT_HTTPHEADER => array(
		    'Content-Type: application/json'
		  ),
		));

		$response = curl_exec($curl);

		curl_close($curl);
	}
}

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

// print_r( $orderdetail);

?>

<script type="text/javascript">
    window.location.href = "https://whatsapp.gntind.com/orders/key/?k=<?php echo $orderdetail->OrderRandom ?>";
</script>