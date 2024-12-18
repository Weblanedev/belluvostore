'use client';

import Link from "next/link";

export const Banner = () => {

	const style = {
		backgroundImage: `url(/banner01.jpg)`,
	};

	const scrollToProducts = () => {
		const products = document.getElementById('products');
		if (products) {
			window.scrollTo({ top: products.offsetTop - 150, behavior: 'smooth' });
		} else {
			window.scrollTo({ top: 500, behavior: 'smooth' });
		}
	};
	return (
    <>
      <section
        style={style}
        className="relative bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-white/75 dark:bg-gray-500/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/45 sm:to-white/15 dark:sm:from-gray-700/95 dark:sm:to-gray-700/25 rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto px-4 py-32 lg:container sm:px-6 lg:flex lg:h-2/2 lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold dark:text-white sm:text-5xl">
              Shop for original and quality items,
              <strong className="block font-extrabold text-rose-700">
                {" "}
                at the best prices{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg dark:text-gray-300 sm:text-xl/relaxed">
              Explore our official stores today to see a wide range of popular
              brands that sell directly on our platform and get assured of the
              best prices and quality of products
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link href="/products?category=electronics">
                <button
                  // onClick={scrollToProducts}
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none active:bg-rose-500 sm:w-auto"
                >
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


