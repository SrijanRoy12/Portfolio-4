export default function Card({ image, description1, description2 }) {
  return (
    <div className="border-[#1e90ff] card-3d card-container border-2 bg-none justify-center rounded-2xl text-amber-50 shadow-md shadow-amber-100 flex flex-col items-center p-4 sm:p-5 text-lg sm:text-xl h-auto sm:h-[290px] w-[90%] sm:w-[240px] max-w-xs">
      <div className="transition-all duration-150">
        <img
          src={image}
          alt="card"
          className="object-contain w-full h-[140px] sm:h-[150px] mb-3"
        />
        <p className="text-xl sm:text-2xl font-extrabold text-center">
          {description1}
        </p>
        <p className="text-lg sm:text-2xl font-bold text-center">
          {description2}
        </p>
      </div>
    </div>
  );
}
