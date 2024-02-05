export default async function handler(req, res) {
    try {
      // ... your existing code
    } catch (error) {
      console.error('Top-level error:', error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }
  