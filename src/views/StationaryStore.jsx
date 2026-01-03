
import StationaryCard from '../components/StationaryCard';
import StationaryCardData from '../configs/stationarydata';

function StationaryStore() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-gray-100 min-h-screen">
      {StationaryCardData.map((item) => {
        const { id, image, name, description, price } = item;

        return (
          <StationaryCard
            key={id}
            image={image}
            name={name}
            description={description}
            price={price}
            onAddToCart={() => console.log(`Added ${name} to cart`)}
          />
        );
      })}
    </div>
  );
}

export default StationaryStore;
