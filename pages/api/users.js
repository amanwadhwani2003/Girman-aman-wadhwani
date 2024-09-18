// pages/api/users.js
import path from 'path';
import fs from 'fs';

const dataFilePath = path.join(process.cwd(), 'public', 'user_list.json');

export default function handler(req, res) {
  try {
    const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
    

    if (req.method === 'GET') {
      const { search } = req.query;

      const filteredData = data.filter((user) => {
        return (
          (user.first_name && user.first_name.toLowerCase().includes(search.toLowerCase())) ||
          (user.last_name && user.last_name.toLowerCase().includes(search.toLowerCase())) ||
          (user.city && user.city.toLowerCase().includes(search.toLowerCase())) ||
          (user.contact_number && user.contact_number.includes(search))
        );
      });

      res.status(200).json(filteredData);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error reading data' });
  }
}
