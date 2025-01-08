function displayInput() {
    // Get the value of the input
    const input = document.getElementById('userInput').value;
    
    // Create a new webpage with the output message
    const newPage = window.open();
    newPage.document.write(`
        <html>
            <head>
                <title>Rasheed ikka's Message</title>
                <link rel="stylesheet" href="hhhh.css">
            </head>
            <body>
            <div class="pink-box">
        <h2 class="heading">Partner Mached 100% <span class="love-symbol">🫦</span></h2>
        <div class="main">
        <h1> <p>Rasheed ikka is waiting for ${input} with porotta and erachi</p></h1>
          
        </div>
    </div>
     <footer>
       
        <a href="https://www.instagram.com/a_b_h_i_ji_th_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" ><img src="insta logo.png" alt="SORRY" height="50PX" width="50px"></a>
        <p> Licensed by</p>
</footer>
               
            </body>
        </html>
    `);
    
    // Hide the input box, submit button, and text above the input box
    document.getElementById('userInput').style.display = 'none';
    document.querySelector('.submit-button').style.display = 'none';
    document.querySelector('.text1').style.display = 'none';
}