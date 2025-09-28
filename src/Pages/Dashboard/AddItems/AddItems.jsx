import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddItems = ({ heading, subHeading }) => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { register, handleSubmit ,reset} = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers:{
            'content-type':'multipart/form-data'
        }
    });
    if(res.data.success){
        const productItem ={
            name : data.name,
            gender : data.gender,
            category : data.category,
            price : parseFloat(data.price),
            brand:data.brand,
            description:data.description,
            image : res.data.data.display_url
        }
        const productRes = await axiosSecure.post('/product' ,productItem)
        console.log(productRes.data);
        if(productRes.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the product.`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with image url',res.data);
  };
  return (
    <div className="px-10">
      <SectionTitle
        heading="add an items"
        subHeading="what's new?"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div className="form-control w-full my-">
            <label className="label-text">Product Name*</label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Gender */}
            <div className="form-control w-full my-3">
              <label className="label-text">Gender*</label>
              <select
                defaultValue="default"
                {...register("gender", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a gender
                </option>
                <option value="Ladies">Ladies</option>
                <option value="Gents">Gents</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
            {/* Category */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="shampoo">Shampoo</option>
                <option value="perfume">Perfume</option>
                <option value="face Cream">Face Cream</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* price */}
            <div className="form-control w-full ">
              <label className="label-text">Price*</label>
              <input
                type="text"
                placeholder="price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
            {/* brand */}
            <div className="form-control w-full ">
              <label className="label-text">Brand*</label>
              <input
                type="text"
                placeholder="brand"
                {...register("brand", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* description */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Description*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Product  description ....."
              {...register("description", { required: true })}
            ></textarea>
          </label>
          <div className="my-3">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn ">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
