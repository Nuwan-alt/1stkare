export const successEmailTemplate = `
<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="date=no">
		<meta name="format-detection" content="address=no">
		<meta name="format-detection" content="email=no">
		<meta name="color-scheme" content="only">
		<title> </title>
		<style>
			body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;} 
			table {border-collapse:collapse;}
			table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
			img{-ms-interpolation-mode: bicubic;}
			img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;}
			table{border-collapse: collapse !important;}
			body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			  }
			@media only screen and (max-width: 450px){
				.break{
					width: 100%!important; 
					text-align: center!important;
					display: block!important;
				}
			}
			@media only screen and (max-width: 600px){
				.full_width{
					width: 100%!important; 
				}
			}
		</style>
	</head>
	<body style="margin: 0px; padding: 0px; font-family: arial; background: #dfdfdf; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#dfdfdf">
       <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#dfdfdf; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%">
        <tbody>
            <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; margin:0 auto; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                    <tbody>
                        <tr>
                            <td>
                            <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                <tbody>
                                    <tr>
                                        <td style="background-color:#fdeccc">
                                        <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#fdeccc; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                            <tbody>
                                                <tr>
                                                    <td style="width:20px">&nbsp;</td>
                                                    <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#fdeccc; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:560px">
                                                        <tbody>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align:center"><a href="{NEXT_PUBLIC_BASE_URL}" style="display:inline-block;" target="_blank"><img alt="" src="https://uploads.1stkare.com/site/Logo.png" style="border:0px; display:block; float:left; height:auto; line-height:100%; max-width:120px; outline:none; text-decoration:none; text-size-adjust:100%; width:120px" /> </a></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:5px; text-align:center">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                    <td style="width:20px">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background-color:#ffffff">
                                        <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                            <tbody>
                                                <tr>
                                                    <td style="width:40px">&nbsp;</td>
                                                    <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:520px">
                                                        <tbody>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left">Hi {USER_NAME}</p>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left">Thanks for {SUBSCRIPTION} your post.</p>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left"><strong>ORDER NO:</strong> {ORDER_NO}</p>
                                                                </td>
                                                            </tr>
                                                          
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left"><strong>Item:</strong>  [{BUSINESS_SIZE}] - &nbsp; {POST_TITLE}</p>
                                                                </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left"><strong>Total:</strong> {AMOUNT}$</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                <table cellpadding="0" cellspacing="0" style="margin:0px auto">
                                                                </table>

                                                                <table border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#000000; border-collapse:collapse; margin:0px auto; mso-table-lspace:0pt; mso-table-rspace:0pt">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colspan="3" style="height:8px">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="width:30px">&nbsp;</td>
                                                                            <td style="text-align:center"><a href={LEARN_MORE} style=" font-family: arial; font-size: 12px; color: #fff; text-decoration: none; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule:exactly; line-height:1.5;" target="_blank"><strong>Learn More</strong></a></td>
                                                                            <td style="width:30px">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" style="height:8px">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:40px">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                    <td style="width:40px">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#000000; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%;">
                                            <tbody>
                                                <tr>
                                                    <td style="width:20px">&nbsp;</td>
                                                    <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#000000; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%;">
                                                        <tbody>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td> 
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:center"><span style="color:#ffffff">{CURRENT_YEAR} &copy; 1stKare.com. All rights reserved.</span></p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                    <td style="width:20px">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
        </tbody>
    </table>
	</body>
</html>
    `

export const failedEmailTemplate = `
<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="date=no">
		<meta name="format-detection" content="address=no">
		<meta name="format-detection" content="email=no">
		<meta name="color-scheme" content="only">
		<title> </title>
		<style>
			body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;} 
			table {border-collapse:collapse;}
			table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
			img{-ms-interpolation-mode: bicubic;}
			img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;}
			table{border-collapse: collapse !important;}
			body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			  }
			@media only screen and (max-width: 450px){
				.break{
					width: 100%!important; 
					text-align: center!important;
					display: block!important;
				}
			}
			@media only screen and (max-width: 600px){
				.full_width{
					width: 100%!important; 
				}
			}
		</style>
	</head>
	<body style="margin: 0px; padding: 0px; font-family: arial; background: #dfdfdf; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#dfdfdf">
<table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #dfdfdf; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td>
                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; margin: 0 auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td>
                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td style="background-color: #fdeccc;">
                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #fdeccc; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                            <td>
                                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #fdeccc; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 560px;" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="text-align: center;"><a style="display: inline-block;" href="{NEXT_PUBLIC_BASE_URL}" target="_blank"><img style="border: 0px; display: block; float: left; height: auto; line-height: 100%; max-width: 120px; outline: none; text-decoration: none; text-size-adjust: 100%; width: 120px;" src="https://uploads.1stkare.com/site/Logo.png" alt="" /> </a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 5px; text-align: center;">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background-color: #ffffff;">
                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 40px;">&nbsp;</td>
                                                            <td>
                                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 520px;" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;">Hi {USER_NAME}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;">We regret to inform you that your {SUBSCRIPTION} payment has failed. Your post remains active.</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;"><strong>ORDER NO:</strong> {ORDER_NO}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;"><strong>Item:</strong> [{BUSINESS_SIZE}] - &nbsp; {POST_TITLE}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;"><strong>Total:</strong> {AMOUNT}$</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; border-collapse: collapse; margin: 0px auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="height: 8px;" colspan="3">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="width: 30px;">&nbsp;</td>
                                                                                            <td style="text-align: center;"><a style="font-family: arial; font-size: 12px; color: #fff; text-decoration: none; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1.5;" href={LEARN_MORE} target="_blank"><strong>Learn More</strong></a></td>
                                                                                            <td style="width: 30px;">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="height: 8px;" colspan="3">&nbsp;</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 40px;">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style="width: 40px;">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                            <td>
                                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 560px;" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: center;"><span style="color: #ffffff;">{CURRENT_YEAR} &copy; 1stKare.com. All rights reserved.</span></p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
	</body>
</html>
    `
export const cancelEmailTemplate = `
<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="date=no">
		<meta name="format-detection" content="address=no">
		<meta name="format-detection" content="email=no">
		<meta name="color-scheme" content="only">
		<title> </title>
		<style>
			body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;} 
			table {border-collapse:collapse;}
			table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
			img{-ms-interpolation-mode: bicubic;}
			img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;}
			table{border-collapse: collapse !important;}
			body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			  }
			@media only screen and (max-width: 450px){
				.break{
					width: 100%!important; 
					text-align: center!important;
					display: block!important;
				}
			}
			@media only screen and (max-width: 600px){
				.full_width{
					width: 100%!important; 
				}
			}
		</style>
	</head>
	<body style="margin: 0px; padding: 0px; font-family: arial; background: #dfdfdf; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#dfdfdf">
<table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #dfdfdf; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" border="0" cellspacing="0" cellpadding="0">
    <tbody>
        <tr>
            <td>
                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; margin: 0 auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0" align="center">
                    <tbody>
                        <tr>
                            <td>
                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr>
                                            <td style="background-color: #fdeccc;">
                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #fdeccc; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                            <td>
                                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #fdeccc; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 560px;" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="text-align: center;"><a style="display: inline-block;" href="{NEXT_PUBLIC_BASE_URL}" target="_blank"><img style="border: 0px; display: block; float: left; height: auto; line-height: 100%; max-width: 120px; outline: none; text-decoration: none; text-size-adjust: 100%; width: 120px;" src="https://uploads.1stkare.com/site/Logo.png" alt="" /> </a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 5px; text-align: center;">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="background-color: #ffffff;">
                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 600px;" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 40px;">&nbsp;</td>
                                                            <td>
                                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #ffffff; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 520px;" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;">Hi {USER_NAME}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;">Ths note is to inform you that your post {SUBSCRIPTION} has been cancelled.</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;"><strong>ORDER NO:</strong> {ORDER_NO}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;"><strong>Item:</strong> [{BUSINESS_SIZE}] - &nbsp; {POST_TITLE}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: left;"><strong>Total:</strong> {AMOUNT}$</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <table style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; border-collapse: collapse; margin: 0px auto; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" border="0" cellspacing="0" cellpadding="0">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="height: 8px;" colspan="3">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="width: 30px;">&nbsp;</td>
                                                                                            <td style="text-align: center;"><a style="font-family: arial; font-size: 12px; color: #fff; text-decoration: none; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule: exactly; line-height: 1.5;" href={LEARN_MORE} target="_blank"><strong>Learn More</strong></a></td>
                                                                                            <td style="width: 30px;">&nbsp;</td>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <td style="height: 8px;" colspan="3">&nbsp;</td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 40px;">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style="width: 40px;">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" border="0" cellspacing="0" cellpadding="0">
                                                    <tbody>
                                                        <tr>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                            <td>
                                                                <table class="full_width" style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #000000; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" border="0" cellspacing="0" cellpadding="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <p style="margin-left: 0; margin-right: 0; text-align: center;"><span style="color: #ffffff;">{CURRENT_YEAR} &copy; 1stKare.com. All rights reserved.</span></p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="height: 5px;">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style="width: 20px;">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
	</body>
</html>
`

export const postMessageEmailTemplate = `
<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, shrink-to-fit=no">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="date=no">
		<meta name="format-detection" content="address=no">
		<meta name="format-detection" content="email=no">
		<meta name="color-scheme" content="only">
		<title> </title>
		<style>
			body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;} 
			table {border-collapse:collapse;}
			table, td{mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
			img{-ms-interpolation-mode: bicubic;}
			img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none;}
			table{border-collapse: collapse !important;}
			body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			  }
			@media only screen and (max-width: 450px){
				.break{
					width: 100%!important; 
					text-align: center!important;
					display: block!important;
				}
			}
			@media only screen and (max-width: 600px){
				.full_width{
					width: 100%!important; 
				}
			}
		</style>
	</head>
	<body style="margin: 0px; padding: 0px; font-family: arial; background: #dfdfdf; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#dfdfdf">
   <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#dfdfdf; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:100%">
        <tbody>
            <tr>
                <td>
                <table align="center" border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; margin:0 auto; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                    <tbody>
                        <tr>
                            <td>
                            <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                <tbody>
                                    <tr>
                                        <td style="background-color:#fdeccc">
                                        <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#fdeccc; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                            <tbody>
                                                <tr>
                                                    <td style="width:20px">&nbsp;</td>
                                                    <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#fdeccc; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:560px">
                                                        <tbody>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="text-align:center"><a href="{NEXT_PUBLIC_BASE_URL}" style="display:inline-block;" target="_blank"><img alt="" src="https://uploads.1stkare.com/site/Logo.png" style="border:0px; display:block; float:left; height:auto; line-height:100%; max-width:120px; outline:none; text-decoration:none; text-size-adjust:100%; width:120px" /> </a></td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:5px; text-align:center">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                    <td style="width:20px">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background-color:#ffffff">
                                        <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                            <tbody>
                                                <tr>
                                                    <td style="width:40px">&nbsp;</td>
                                                    <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#ffffff; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:520px">
                                                        <tbody>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left">Hi {RECEPIENT_FULL_NAME}</p>
                                                                </td>
                                                            </tr>
                                                         
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left"><strong></strong> {MESSAGE_CONTENT}</p>
                                                                </td>
                                                            </tr>
                                                          
                                                           
                                                            
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:left">
                                                                    
                                                                     <a href="{MESSAGE_REPLY}">
                                        Reply to this message on 1stKare
                                    </a>
                                                                
                                                                </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                <table cellpadding="0" cellspacing="0" style="margin:0px auto">
                                                                </table>

                                                                <table border="0" cellpadding="0" cellspacing="0" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#000000; border-collapse:collapse; margin:0px auto; mso-table-lspace:0pt; mso-table-rspace:0pt">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colspan="3" style="height:8px">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td style="width:30px">&nbsp;</td>
                                                                         
<td style="text-align:center"><a href={LEARN_MORE} style=" font-family: arial; font-size: 12px; color: #fff; text-decoration: none; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; mso-line-height-rule:exactly; line-height:1.5;" target="_blank"><strong>Learn More</strong></a></td>
                                                                            
                                                                            
                                                                            <td style="width:30px">&nbsp;</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td colspan="3" style="height:8px">&nbsp;</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:40px">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                    <td style="width:40px">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#000000; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:600px">
                                            <tbody>
                                                <tr>
                                                    <td style="width:20px">&nbsp;</td>
                                                    <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" class="full_width" style="-ms-text-size-adjust:100%; -webkit-text-size-adjust:100%; background:#000000; border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:560px">
                                                        <tbody>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td> 
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                <p style="margin-left:0; margin-right:0; text-align:center"><span style="color:#ffffff">{CURRENT_YEAR} &copy; 1stKare.com. All rights reserved.</span></p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td style="height:5px">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    </td>
                                                    <td style="width:20px">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </td>
            </tr>
        </tbody>
    </table>
	</body>
</html>
    `
