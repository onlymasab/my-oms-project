import React from 'react';
import { Button } from '@shadcn/ui'; // 

function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Operations Management System</h1>
      <p className="text-xl mb-4">Manage your operations seamlessly.</p>
      <Button variant="solid" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Get Started
      </Button>
    </div>
  );
}

export default Home;