        let qtyF = document.getElementById('QtyF');
		let qtyM = document.getElementById('QtyM');

		let TotboxF = document.getElementById('fdisp');
		let TotboxM = document.getElementById('mdisp');

		let grandTotal = document.getElementById('total');

		let gt = null;

		function calc(){
			let priceF = 150.95;
			let priceM = 180.95;
			gt = 0;

			let qtyF = parseInt(QtyF.value, 10);
            let qtyM = parseInt(QtyM.value, 10);
            
            let fp = qtyF*priceF;
            let mp = qtyM*priceM;
            fp = fp.toFixed(2)
            mp = mp.toFixed(2)

			if(qtyF){TotboxF.textContent = fp; gt += + TotboxF.textContent;}
			if(qtyM){TotboxM.textContent = mp; gt += + TotboxM.textContent;}
			grandTotal.textContent = gt.toFixed(2);
		}

		function getGrandTotal(){
			calc();
		}