const provinceSelect = document.getElementById('provinceSelect');
const districtSelect = document.getElementById('districtSelect');

provinceSelect.addEventListener('change', function() {
    // Kiểm tra nếu giá trị chọn khác với "Chọn tỉnh thành phố"
    if (this.value !== "") {
        districtSelect.disabled = false; // Mở khóa
        districtSelect.style.cursor = "pointer"; // Trả lại con trỏ bình thường
    } else {
        districtSelect.disabled = true; // Khóa lại
        districtSelect.selectedIndex = 0; // Reset quận về mặc định
    }
});



        const menuToggle = document.getElementById('menuToggle');
        const mobileNavbar = document.getElementById('mobileNavbar');

        menuToggle.addEventListener('click', () => {
            mobileNavbar.classList.toggle('active');
        });

        // Tùy chọn: Đóng menu khi nhấn vào một link bất kỳ
        const navLinks = document.querySelectorAll('.nav_text');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavbar.classList.remove('active');
            });
        });