export const apiRequest = async (method, uri, body = null) => {
    try {
        const response = await fetch(uri, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Request failed:', error);
        throw error; 
    }
};
