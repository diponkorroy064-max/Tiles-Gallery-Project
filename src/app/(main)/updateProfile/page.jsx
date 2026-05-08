'use client'
import { authClient } from '@/lib/auth-client';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const updateProfilePage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = async (data) => {
        const { name, photo } = data;
        // console.log("user info", name, photo);

        const { data:res, error } = await authClient.updateUser({
            image: photo,
            name: name,
        });
        // console.log("update response", res, error);
        
        if (error) {
            toast.error('Failed to update Profile: ' + error.message);
        }
        else if (res) {
            toast.success('Successfully Updated Profile');
        }
    }
    

    return (
        <div className='container mx-auto flex justify-center items-center my-30 px-5'>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <fieldset className="fieldset bg-base-200 border-gray-300 rounded-box border p-4 space-y-5">
                    <label className="font-bold text-xl">Change Your Name</label>
                    <input name='name' type="name" className="input w-full" placeholder="Change Name" {...register("name", { required: true })} />
                    {errors.name && <span className='text-red-500'>Name is required</span>}

                    <label className="font-bold text-xl">Change Your Photo URL</label>
                    <input name='photo' type="photo" className="input w-full" placeholder="Change Photo URL" {...register("photo", { required: true })} />
                    {errors.photo && <span className='text-red-500'>Photo URL is required</span>}

                    <button className="btn btn-outline btn-secondary mt-4">Update Your Profile</button>
                </fieldset>
            </form>
        </div>
    );
};

export default updateProfilePage;

