// Function to check weather given email is correct or not
export const isValidEmail = (email = '') => {
    return email.includes('@') && email.includes('.');
};