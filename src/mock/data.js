export const products = [

  {
      id: 1,
      name: "AIR JORDAN 1 HIGH OG",
      price: 30000,
      stock: 10,
      description: "Un diseño atractivo y retro, unido a una comodidad premium.",
      category: "PopularItems",
      img: "https://res.cloudinary.com/duqi08ihm/image/upload/v1670718907/1_mxfgab.webp"
  },
  {
      id: 2,
      name: "NIKE AIR ZOOM G.T. JUMP",
      price: 25000,
      stock: 15,
      description: "Las ZOOM G.T. JUMP cuenta con una elaboración de material ultra resistente.",
      category: "PopularItems",
      img: "https://res.cloudinary.com/duqi08ihm/image/upload/v1670718907/2_ytnxf1.webp"
  },
  {
      id: 3,
      name: "LEBRON XIX",
      price: 40000,
      stock: 5,
      description: "Las LeBron XIX cuentan con dos sistemas de amortiguación actualizados.",
      category: "NewArrivals",
      img: "https://res.cloudinary.com/duqi08ihm/image/upload/v1670718907/7_kc8ckz.webp"
  },
  {
      id: 4,
      name: "ZOOM LEBRON III QS",
      price: 35000,
      stock: 10,
      description: "Las Zoom LeBron 3 mantiene una apariencia limpia.",
      category: "NewArrivals",
      img: "https://res.cloudinary.com/duqi08ihm/image/upload/v1670718907/8_fwtyjj.webp"
  }

]



export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, []);
  });
};
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter((indumentaria) => indumentaria.category === categoryId)
      );
    }, []);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((indumentaria) => indumentaria.id === id));
    }, []);
  });
};
