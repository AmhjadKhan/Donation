

function Banner() {
  return (
    <div className="mt-10 ">
      <div className="card w-full bg-white shadow-xl image-full h-80">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR274GcJfXdWcnKaUKHNMqbPNVf8EpBckIHpA&usqp=CAU" className="w-full" /></figure>
  <div className="card-body">
    <div>
    <h1 className="text-4xl font-semibold text-black text-center mb-9">I Grow By Helping People In Need</h1>
    </div>
   
  <div className="flex">
  <div className="">
      <input type="text" placeholder="Search" className="input input-bordered w-80 ml-96" />
    </div>
    <div>
    <button className="btn btn-secondary">Search</button>
    </div>
  </div>
  </div>
</div>
    </div>
  )
}

export default Banner
