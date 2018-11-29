const { redirectDomain } = require("../../../config/keys");
module.exports = survey => {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head>
  <!--[if gte mso 9]><xml>
   <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
   </o:OfficeDocumentSettings>
  </xml><![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  <!--[if !mso]><!-- -->
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
<!--<![endif]-->
  
  <style type="text/css" id="media-query">
    body {
margin: 0;
padding: 0; }

table, tr, td {
vertical-align: top;
border-collapse: collapse; }

.ie-browser table, .mso-container table {
table-layout: fixed; }

* {
line-height: inherit; }

a[x-apple-data-detectors=true] {
color: inherit !important;
text-decoration: none !important; }

[owa] .img-container div, [owa] .img-container button {
display: block !important; }

[owa] .fullwidth button {
width: 100% !important; }

[owa] .block-grid .col {
display: table-cell;
float: none !important;
vertical-align: top; }

.ie-browser .num12, .ie-browser .block-grid, [owa] .num12, [owa] .block-grid {
width: 515px !important; }

.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
line-height: 100%; }

.ie-browser .mixed-two-up .num4, [owa] .mixed-two-up .num4 {
width: 168px !important; }

.ie-browser .mixed-two-up .num8, [owa] .mixed-two-up .num8 {
width: 336px !important; }

.ie-browser .block-grid.two-up .col, [owa] .block-grid.two-up .col {
width: 257px !important; }

.ie-browser .block-grid.three-up .col, [owa] .block-grid.three-up .col {
width: 171px !important; }

.ie-browser .block-grid.four-up .col, [owa] .block-grid.four-up .col {
width: 128px !important; }

.ie-browser .block-grid.five-up .col, [owa] .block-grid.five-up .col {
width: 103px !important; }

.ie-browser .block-grid.six-up .col, [owa] .block-grid.six-up .col {
width: 85px !important; }

.ie-browser .block-grid.seven-up .col, [owa] .block-grid.seven-up .col {
width: 73px !important; }

.ie-browser .block-grid.eight-up .col, [owa] .block-grid.eight-up .col {
width: 64px !important; }

.ie-browser .block-grid.nine-up .col, [owa] .block-grid.nine-up .col {
width: 57px !important; }

.ie-browser .block-grid.ten-up .col, [owa] .block-grid.ten-up .col {
width: 51px !important; }

.ie-browser .block-grid.eleven-up .col, [owa] .block-grid.eleven-up .col {
width: 46px !important; }

.ie-browser .block-grid.twelve-up .col, [owa] .block-grid.twelve-up .col {
width: 42px !important; }

@media only screen and (min-width: 535px) {
.block-grid {
  width: 515px !important; }
.block-grid .col {
  vertical-align: top; }
  .block-grid .col.num12 {
    width: 515px !important; }
.block-grid.mixed-two-up .col.num4 {
  width: 168px !important; }
.block-grid.mixed-two-up .col.num8 {
  width: 336px !important; }
.block-grid.two-up .col {
  width: 257px !important; }
.block-grid.three-up .col {
  width: 171px !important; }
.block-grid.four-up .col {
  width: 128px !important; }
.block-grid.five-up .col {
  width: 103px !important; }
.block-grid.six-up .col {
  width: 85px !important; }
.block-grid.seven-up .col {
  width: 73px !important; }
.block-grid.eight-up .col {
  width: 64px !important; }
.block-grid.nine-up .col {
  width: 57px !important; }
.block-grid.ten-up .col {
  width: 51px !important; }
.block-grid.eleven-up .col {
  width: 46px !important; }
.block-grid.twelve-up .col {
  width: 42px !important; } }

@media (max-width: 535px) {
.block-grid, .col {
  min-width: 320px !important;
  max-width: 100% !important;
  display: block !important; }
.block-grid {
  width: calc(100% - 40px) !important; }
.col {
  width: 100% !important; }
  .col > div {
    margin: 0 auto; }
img.fullwidth, img.fullwidthOnMobile {
  max-width: 100% !important; }
.no-stack .col {
  min-width: 0 !important;
  display: table-cell !important; }
.no-stack.two-up .col {
  width: 50% !important; }
.no-stack.mixed-two-up .col.num4 {
  width: 33% !important; }
.no-stack.mixed-two-up .col.num8 {
  width: 66% !important; }
.no-stack.three-up .col.num4 {
  width: 33% !important; }
.no-stack.four-up .col.num3 {
  width: 25% !important; }
.mobile_hide {
  min-height: 0px;
  max-height: 0px;
  max-width: 0px;
  display: none;
  overflow: hidden;
  font-size: 0px; } }

  </style>
</head>
<body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFFFFF">
<style type="text/css" id="media-query-bodytag">
  @media (max-width: 520px) {
    .block-grid {
      min-width: 320px!important;
      max-width: 100%!important;
      width: 100%!important;
      display: block!important;
    }

    .col {
      min-width: 320px!important;
      max-width: 100%!important;
      width: 100%!important;
      display: block!important;
    }

      .col > div {
        margin: 0 auto;
      }

    img.fullwidth {
      max-width: 100%!important;
    }
    img.fullwidthOnMobile {
      max-width: 100%!important;
    }
    .no-stack .col {
      min-width: 0!important;
      display: table-cell!important;
    }
    .no-stack.two-up .col {
      width: 50%!important;
    }
    .no-stack.mixed-two-up .col.num4 {
      width: 33%!important;
    }
    .no-stack.mixed-two-up .col.num8 {
      width: 66%!important;
    }
    .no-stack.three-up .col.num4 {
      width: 33%!important;
    }
    .no-stack.four-up .col.num3 {
      width: 25%!important;
    }
    .mobile_hide {
      min-height: 0px!important;
      max-height: 0px!important;
      max-width: 0px!important;
      display: none!important;
      overflow: hidden!important;
      font-size: 0px!important;
    }
  }
</style>
<!--[if IE]><div class="ie-browser"><![endif]-->
<!--[if mso]><div class="mso-container"><![endif]-->
<table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFFFFF;width: 100%" cellpadding="0" cellspacing="0">
<tbody>
<tr style="vertical-align: top">
  <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFFFFF;"><![endif]-->

  <div style="background-color:#3AAEE0;">
    <div style="Margin: 0 auto;min-width: 320px;max-width: 515px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:#3AAEE0;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 515px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

            <!--[if (mso)|(IE)]><td align="center" width="515" style=" width:515px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
          <div class="col num12" style="min-width: 320px;max-width: 515px;display: table-cell;vertical-align: top;">
            <div style="background-color: transparent; width: 100% !important;">
            <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->

                
                  <div class="">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;"><![endif]-->
<div style="color:#484444;line-height:120%;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px;">	
  <div style="font-size:12px;line-height:14px;color:#484444;font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="font-size: 30px; line-height: 36px;">Hey. We've got question for you...</span></p></div>	
</div>
<!--[if mso]></td></tr></table><![endif]-->
</div>
                
            <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
            </div>
          </div>
        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  <div style="background-color:transparent;">
    <div style="Margin: 0 auto;min-width: 320px;max-width: 515px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid ">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 515px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

            <!--[if (mso)|(IE)]><td align="center" width="515" style=" width:515px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
          <div class="col num12" style="min-width: 320px;max-width: 515px;display: table-cell;vertical-align: top;">
            <div style="background-color: transparent; width: 100% !important;">
            <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->

                
                  <div class="">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 30px; padding-bottom: 10px;"><![endif]-->
<div style="color:#555555;line-height:120%;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif; padding-right: 10px; padding-left: 10px; padding-top: 30px; padding-bottom: 10px;">	
  <div style="font-size:12px;line-height:14px;color:#555555;font-family:TimesNewRoman, 'Times New Roman', Times, Beskerville, Georgia, serif;text-align:left;"><p style="margin: 0;font-size: 12px;line-height: 14px"><span style="line-height: 21px; font-size: 18px;"><span style="line-height: 21px; font-size: 18px;">${
    survey.body
  }</span></span></p></div>	
</div>
<!--[if mso]></td></tr></table><![endif]-->
</div>
                
            <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
            </div>
          </div>
        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
  <div style="background-color:transparent;">
    <div style="Margin: 0 auto;min-width: 320px;max-width: 515px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;" class="block-grid two-up ">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 515px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

            <!--[if (mso)|(IE)]><td align="center" width="258" style=" width:258px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
          <div class="col num6" style="max-width: 320px;min-width: 257px;display: table-cell;vertical-align: top;">
            <div style="background-color: transparent; width: 100% !important;">
            <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->

                
                  
<div align="center" class="button-container center " style="padding-right: 10px; padding-left: 10px; padding-top:25px; padding-bottom:10px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:25px; padding-bottom:10px;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${redirectDomain}/thanks" style="height:25pt; v-text-anchor:middle; width:47pt;" arcsize="12%" strokecolor="#DC165A" fillcolor="#DC165A"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size:14px;"><![endif]-->
  <a href="${redirectDomain}/thanks" target="_blank" style="display: block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #DC165A; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; max-width: 63px; width: 23px;width: auto; border-top: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-left: 0px solid transparent; padding-top: 5px; padding-right: 20px; padding-bottom: 5px; padding-left: 20px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;mso-border-alt: none">
    <span style="font-size:12px;line-height:24px;">No</span>
  </a>
<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
</div>

                
            <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
            </div>
          </div>
            <!--[if (mso)|(IE)]></td><td align="center" width="258" style=" width:258px; padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
          <div class="col num6" style="max-width: 320px;min-width: 257px;display: table-cell;vertical-align: top;">
            <div style="background-color: transparent; width: 100% !important;">
            <!--[if (!mso)&(!IE)]><!--><div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;"><!--<![endif]-->

                
                  
<div align="center" class="button-container center " style="padding-right: 10px; padding-left: 10px; padding-top:20px; padding-bottom:10px;">
<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:20px; padding-bottom:10px;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${redirectDomain}/thanks" style="height:31pt; v-text-anchor:middle; width:54pt;" arcsize="10%" strokecolor="#38C20F" fillcolor="#38C20F"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; font-size:16px;"><![endif]-->
  <a href="${redirectDomain}/thanks" target="_blank" style="display: block;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #ffffff; background-color: #38C20F; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; max-width: 73px; width: 33px;width: auto; border-top: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-left: 0px solid transparent; padding-top: 5px; padding-right: 20px; padding-bottom: 5px; padding-left: 20px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;mso-border-alt: none">
    <span style="font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;line-height:32px;">Yes</span>
  </a>
<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
</div>

                
            <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
            </div>
          </div>
        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
    </div>
  </div>
 <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
  </td>
</tr>
</tbody>
</table>
<!--[if (mso)|(IE)]></div><![endif]-->


</body></html>`;
};
