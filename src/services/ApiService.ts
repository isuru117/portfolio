const BASE_URL = process.env.REACT_APP_API_URL;

export async function submitContactForm(name: string, email: string, message: string, maxRetries: number = 2): Promise<boolean> {
    const endpoint = `${BASE_URL}/ContactMe`;

    const formData = {
        name: name.trim(),
        email: email.trim(),
        message: message
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            return true;
        } else {
            console.error('Failed to submit contact form:', response);
            return false;
        }
    } catch (error) {
        console.error('An error occurred while submitting contact form:', error);

        // server not up, retry to send request with a 3 second delay

        if (maxRetries > 0) {
            console.log(`Retrying (${maxRetries} attempts left)...`);
            await new Promise(resolve => setTimeout(resolve, 3000));
            return submitContactForm(name, email, message, maxRetries - 1);
        } else {
            console.error('Maximum retries exceeded. Could not submit form.');
            return false;
        }
    }
}
