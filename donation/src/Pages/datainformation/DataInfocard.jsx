import swal from 'sweetalert';

function DataInfocard({ data }) {
  const { id, title, image, description,money} = data;

  const handleAddtoDonation = () => {
    const donationItems = JSON.parse(localStorage.getItem('donation')) || [];
    const exists = donationItems.find(item => item.id === id);

    if (!exists) {
      donationItems.push(data);
      localStorage.setItem('donation', JSON.stringify(donationItems));
      swal("Good job!", "Donation added", "success");
    } else {
      swal("sorry!", "Don't donate twice", "error");
    }
  }

  return (
    <div>
      <img
        className="h-96 w-2/3 ml-40 object-cover object-center"
        src={image}
      />
      <div className="bg-black">
        <button
          onClick={handleAddtoDonation}
          className="absolute bottom-0 left-0 ml-40 mb-28 border-none text-white btn bg-red-500">
          Donate ${money}
        </button>
z      </div>
      <h1 className="text-4xl mt-11 w-2/3 ml-40 font-extrabold">{title}</h1>
      <p className="text-lg mt-5 w-2/3 ml-40">{description}</p>
    </div>
  );
}

export default DataInfocard;
