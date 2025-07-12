function toggleContact(){
    const contactSection = document.getElementById('contact');
    
    if (contactSection.style.display === 'none'){
        contactSection.style.display = 'block';
    } else {
        contactSection.style.display = 'none';
    }
}