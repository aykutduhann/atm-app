/* 
1-Bakiye Görüntüleme
2-Para Çekme
3-Para Yatırma
4-Çıkış

Atm Uygulaması */

let yeniSatir = "\r\n";
let bakiye = 1000;



let metin = "1-Bakiye görüntüleme" +yeniSatir+
"2-Para Çekme"+yeniSatir+
"3-Para Yatırma"+yeniSatir+
"4-Çıkış"+yeniSatir+
"Lütfen bir değer seçiniz.";

let secim = prompt(metin);

switch (secim) {
    case "1":
        alert(bakiye);
        break;

    case "2":
        let cekilecekTutar = Number(prompt("Çekmek istediğiniz Tutarı giriniz : "));
        if(cekilecekTutar<bakiye){
            bakiye=bakiye-cekilecekTutar;
            alert("Kalan Bakiye : " + bakiye);
        }else{
            alert("Bakiyeniz yetersizdir.! "+yeniSatir
                +"Bakiyeniz : "+bakiye + " " + "Cekilecek Tutar : " + cekilecekTutar);
        }  

        break;

        case "3" : 

        let yatirilacakTutar = Number(prompt("Yatırılacak Tutarı giriniz : "));

        bakiye = bakiye + yatirilacakTutar;
        alert("Güncel Bakiyeniz :  " + bakiye);

        case "4" : 
        alert("Sistemden çıkış yapılmıştır");

        default : 
        alert("Lütfen 1 - 4 arasında bir değer seçiniz.");
        break;
}