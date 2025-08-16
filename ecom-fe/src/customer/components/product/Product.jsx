// src/customer/components/product/Product.jsx
"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProducts, findProductById, selectProducts } from "../../../store/productSlice";
import { useNavigate } from "react-router-dom";
import Card from "../HomeSectionCard/Card";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/20/solid";
import { mens_kurta } from "../../../data/mens_kurta";

const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // **READ PRODUCTS FROM REDUX**
  const productsFromStore = useSelector(selectProducts);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filteredData, setFilteredData] = useState(mens_kurta);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [filterSelections, setFilterSelections] = useState({
    color: [],
    category: [],
    size: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Update filters when checkboxes change
  const handleFilterChange = (sectionId, value, checked) => {
    setFilterSelections((prev) => {
      const updatedSelections = { ...prev };
      if (checked) {
        updatedSelections[sectionId] = [...prev[sectionId], value];
      } else {
        updatedSelections[sectionId] = prev[sectionId].filter((v) => v !== value);
      }
      return updatedSelections;
    });
    setCurrentPage(1);
  };

  // Load products once on mount
  useEffect(() => {
    dispatch(findProducts());
  }, [dispatch]);

  // when store products or filters change, compute filteredData
  useEffect(() => {
    // prefer products from store; fallback to local mens_kurta
    const base = (productsFromStore && productsFromStore.length > 0) ? productsFromStore : mens_kurta;
    let result = base.slice();

    // === apply filters (color, category, size) ===
    if (filterSelections.color.length || filterSelections.category.length || filterSelections.size.length) {
      result = result.filter((item) => {
        const colorMatch =
          filterSelections.color.length === 0 ||
          filterSelections.color.includes(String(item.color || "").toLowerCase());

        // category in your data may be object or null; try several places
        const itemCategoryName = item._raw?.category?.name ?? item.category ?? "";
        const categoryMatch =
          filterSelections.category.length === 0 ||
          filterSelections.category.includes(String(itemCategoryName).toLowerCase());

        // sizes is array of { name } in normalized object, or array in raw
        const sizeMatch =
          filterSelections.size.length === 0 ||
          (Array.isArray(item.sizes) && item.sizes.some((s) => filterSelections.size.includes(String(s.name || s).toLowerCase())));

        return colorMatch && categoryMatch && sizeMatch;
      });
    }

    // === sorting ===
    if (selectedSort.name === "Price: Low to High") {
      result = result.sort((a, b) => (a.discountedPrice || a.price || 0) - (b.discountedPrice || b.price || 0));
    } else if (selectedSort.name === "Price: High to Low") {
      result = result.sort((a, b) => (b.discountedPrice || b.price || 0) - (a.discountedPrice || a.price || 0));
    }

    setFilteredData(result);
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsFromStore, filterSelections, selectedSort]);

  // Pagination calculations
  const totalItems = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <input
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={filterSelections[section.id].includes(option.value)}
                                onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <label htmlFor={`filter-mobile-${section.id}-${optionIdx}`} className="min-w-0 flex-1 text-gray-500">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon aria-hidden="true" className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500" />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            onClick={() => {
                              setSelectedSort(option);
                              setCurrentPage(1);
                            }}
                            className={classNames(
                              option.current ? "font-medium text-gray-900" : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="text-lg font-semibold opacity-50">Filters</h3>
                <h3 className="sr-only">Categories</h3>
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={filterSelections[section.id].includes(option.value)}
                                onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                            </div>
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                  {paginatedData.map((item, index) => {
                    const id = item?.id || item?._raw?._id || item?._id;
                    return (
                      <div
                        key={id ?? index}
                        className="cursor-pointer"
                        onClick={() => {
                          if (!id) return; // avoid navigating to /product/ with empty id
                          dispatch(findProductById(id)); // optional prefetch
                          navigate(`/product/${id}`);
                        }}
                      >
                        <Card product={item} />
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={classNames(
                      currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700",
                      "px-4 py-2 text-sm font-medium text-white rounded-md"
                    )}
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={classNames(
                          currentPage === page ? "bg-indigo-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100",
                          "px-3 py-1 border rounded-md text-sm font-medium"
                        )}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={classNames(
                      currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700",
                      "px-4 py-2 text-sm font-medium text-white rounded-md"
                    )}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
