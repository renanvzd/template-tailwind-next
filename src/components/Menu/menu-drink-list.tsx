import React from "react";

const softDrinks = [
  {
    id: 1,
    name: "Coca-Cola",
    price: "3.30",
  },
  {
    id: 2,
    name: "Diet-Coke",
    price: "8.00",
  },
  {
    id: 3,
    name: "Sparkling Water",
    price: "3.00",
  },
  {
    id: 4,
    name: "Sparkling Water",
    price: "3.00",
  },
  {
    id: 5,
    name: "Sparkling Water",
    price: "3.00",
  },
  {
    id: 6,
    name: "Sparkling Water",
    price: "3.00",
  },
]
const beer = [
  {
    id: 1,
    name: "Belgium",
    price: "6.00",
  },
  {
    id: 2,
    name: "Ipa",
    price: "8.00",
  },
  {
    id: 3,
    name: "Weiss",
    price: "7.00",
  },
  {
    id: 4,
    name: "Pilsen",
    price: "5.00",
  },
]

const whiskey = [
  {
    id: 1,
    name: "Jameson",
    price: "6.00",
  },
  {
    id: 2,
    name: "Jameson Black Barrel",
    price: "9.50",
  },
  {
    id: 3,
    name: "Powers John's Lane",
    price: "10.00",
  },
  {
    id: 4,
    name: "Redbreast 21 Year",
    price: "23.00",
  },
]



const MenuDrinkList: React.FC = () => (
  <>
    <div className="w-full h-full mt-0 mb-20 flex flex-col justify-center mx-auto items-center">
      <p className="md:text-6xl text-5xl md:pb-10 pb-12">Drinks</p>
      <div className="lg:w-[80%] md:w-full w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-5  gap-x-8 lg:px-5 md:px-8 px-4">

        <div className="w-full flex flex-col py-5 mx-auto items-center rounded-md">
          <p className="mx-auto text-center text-3xl font-bold">Soft Drinks</p>
          {softDrinks.map((item, index) => (
            <div key={item.id} className="w-full flex mx-auto justify-between rounded-md ">
              <div className="flex flex-col w-full md:pt-8 px-4">
                {/* <Image src={Food} alt="Food" className="rounded-md pb-5" /> */}
                <div className="flex items-baseline justify-between pb-2 p-2">
                  <div>
                    <p className="pontas md:text-3xl text-xl">{item.name}</p>
                  </div>
                  <div className="flex-1">
                    <p className="meio drink md:text-3xl text-xl border-b-2 border-dotted border-gray-400"></p>
                  </div>
                  <div>
                    <p className="pontas md:text-3xl text-xl">£{item.price}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col py-5 mx-auto items-center rounded-md">
          <p className="mx-auto text-center text-3xl font-bold">Beer</p>
          {beer.map((item, index) => (
            <div key={item.id} className="w-full flex mx-auto justify-between rounded-md ">
              <div className="flex flex-col w-full md:pt-8 px-4">
                {/* <Image src={Food} alt="Food" className="rounded-md pb-5" /> */}
                <div className="flex items-baseline justify-between pb-2 p-2">
                  <div>
                    <p className="pontas md:text-3xl text-xl">{item.name}</p>
                  </div>
                  <div className="flex-1">
                    <p className="meio drink md:text-3xl text-xl border-b-2 border-dotted border-gray-400"></p>
                  </div>
                  <div>
                    <p className="pontas md:text-3xl text-xl">£{item.price}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col py-5 mx-auto items-center rounded-md lg:pt-20">
          <p className="mx-auto text-center text-3xl font-bold">Whiskey</p>
          {whiskey.map((item, index) => (
            <div key={item.id} className="w-full flex mx-auto justify-between rounded-md ">
              <div className="flex flex-col w-full md:pt-8 px-4">
                {/* <Image src={Food} alt="Food" className="rounded-md pb-5" /> */}
                <div className="flex items-baseline justify-between pb-2 p-2">
                  <div>
                    <p className="pontas md:text-3xl text-xl">{item.name}</p>
                  </div>
                  <div className="flex-1">
                    <p className="meio drink md:text-3xl text-xl border-b-2 border-dotted border-gray-400"></p>
                  </div>
                  <div>
                    <p className="pontas md:text-3xl text-xl">£{item.price}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </>
);

export { MenuDrinkList };

