if(sessionStorage) {
	$(document).ready(function(){
		$('.save').click(function(){
				var name_element = $('#names').val();
				sessionStorage.setItem("imie", name_element);

				var salary_element = $('#netto').val();
				sessionStorage.setItem("stawka",salary_element); 

				var ava_element = $('#availability').val();
				if (ava_element>3) {alert("Zła wartość.")}
				else if(ava_element==0) {alert("zła wartość.")};
				sessionStorage.setItem("dostepnosc", ava_element);

				var day_element = $('#day').val();  
        		sessionStorage.setItem("dzien", day_element);
        //imie
        	var name_elements = document.getElementsByClassName('name');
        	for (var i=0; i<name_elements.length; i++) {
        		name_elements[i].innerHTML=sessionStorage.getItem("imie");
        	}
        //stawka dzienna	
        	var salary_elements = document.getElementsByClassName('salary');
			for (var i=0; i<salary_elements.length; i++) {
			salary_elements[i].innerHTML=sessionStorage.getItem("stawka");
			}
		//stawka miesieczna

			var month_salary_netto = document.getElementsByClassName('salary_month_netto');
			var salary_elements = sessionStorage.getItem("stawka");
			for (var i=0; i<month_salary_netto.length; i++) {
			month_salary_netto[i].innerHTML=(salary_elements*21);
			}
			//stawka po odjęciu podatku i ZUSu
			var month_salary = document.getElementsByClassName('salary_month');
			var salary_elements = sessionStorage.getItem("stawka");
			for (var i=0; i<month_salary.length; i++) {
			month_salary[i].innerHTML=(((salary_elements*21)*81)/100)-650;
			}
			//+23% VAT
			var month_vat = document.getElementsByClassName('vat_salary');
			var salary_elements = sessionStorage.getItem("stawka");
			for (i=0; i<month_vat.length; i++) {
			month_vat[i].innerHTML = ((salary_elements*21)*123)/100;
			}
			//VAT
			var month_vat_all = document.getElementsByClassName('vat');
			var salary_elements = sessionStorage.getItem("stawka");
			for (i=0; i<month_vat_all.length; i++) {
			month_vat_all[i].innerHTML = ((salary_elements*21)*23)/100;
			}

			//dostępność
			var notice_elements = document.getElementsByClassName('notice_days');
			for(var i=0; i<notice_elements.length; i++) {
			notice_elements[i].innerHTML=sessionStorage.getItem("dostepnosc");
			}
			//data
			var day_elements = document.getElementsByClassName('day');
			for (var i=0; i<day_elements.length; i++) {
			day_elements[i].innerHTML=sessionStorage.getItem("dzien");

						}
			});
        });
	};

