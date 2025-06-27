class SocialMediaApp {
    constructor() {
        this.init();
    }

    async init() {
        console.log('Social Media App initialized');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SocialMediaApp();
});