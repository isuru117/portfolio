export async function submitContactForm(name: string, email: string, message: string): Promise<boolean> {
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: name.trim(),
                email: email.trim(),
                message: message,
            }),
        });

        if (response.ok) {
            return true;
        }

        console.error("Failed to submit contact form:", response.status, await response.text());
        return false;
    } catch (error) {
        console.error("An error occurred while submitting contact form:", error);
        return false;
    }
}
