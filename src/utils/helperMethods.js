export const scrollToSection = (location) => {
    if (location.state?.scrollToId) {
        const element = document.getElementById(location.state.scrollToId);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100); // slight delay helps ensure rendering is done
        }
    }
}