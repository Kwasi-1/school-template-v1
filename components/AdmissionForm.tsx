export default function AdmissionForm() {
  return (
    <div className="fixed bottom-10 right-10 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4">Apply For Admission</h3>
      <form className="space-y-4">
        <input type="text" placeholder="First Name" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-primary text-white p-2 rounded">Apply Now</button>
      </form>
    </div>
  );
}