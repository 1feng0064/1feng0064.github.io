$(document).ready(()=>{
    $('#btnSubmit').click((e)=>{
        let fields = ['name', 'email', 'address', 'city', 'province', 'postcode'];
        let hasErr = false;
        for (let i = 0; i < fields.length; i++) {
            let f = fields[i];
            if (!$(`#${f}`).val()) {
                alert(`filed "${f}" cannot be empty`);
                hasErr = true;
                break;
            }
        }
        if (!hasErr) {
            $('#profileName').text($('#name').val());
            $('#profileAddress').text($('#address').val());
            $('#profileCityProvinceZip').text(
                $('#city').val() + ',' +
                $('#province').val() + ' ' + 
                $('#postcode').val()
            );
            $('#profileCard').css('box-shadow', '1px 1px 5px 5px #1cd61c');
            setTimeout(()=>{
                 $('#profileCard').css('box-shadow', '1px 1px 5px 5px #888888');
            }, 800);
            
        }
        
    })
});