import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ManageBooking = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [updatingId, setUpdatingId] = useState(null);

  // Fetch bookings
  const { data: bookings = [], isLoading, isError } = useQuery({
    queryKey: ["manage-bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/manage-bookings");
      return res.data;
    },
  });

  // Update status mutation
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const res = await axiosSecure.patch(`/manage-bookings/${id}`, { status });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["manage-bookings"]);
      setUpdatingId(null);
    },
  });

  // Delete booking mutation
  const deleteBookingMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/manage-bookings/${id}`);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries(["manage-bookings"]),
  });

  if (isLoading) return <p>Loading bookings...</p>;
  if (isError) return <p>Failed to load bookings.</p>;

  return (
    <div>
      <SectionTitle
              heading="Manage All Bookings"
              subHeading="Hurry up"
            ></SectionTitle>
     <div className="px-10">
      <div className="overflow-x-auto">
         <table className="table">
        <thead>
          <tr className="bg-[#D1A054] text-white uppercase">
            <th>#</th>
            <th>Email</th>
            <th>Price</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b ,index) => (
            <tr key={b._id}>
              <td>{index + 1}</td>
              <td>{b.email}</td>
              <td>${b.price}</td>
            <td>
  <select
    value={b.status}
    onChange={(e) => {
      setUpdatingId(b._id);
      updateStatusMutation.mutate({ id: b._id, status: e.target.value });
    }}
    disabled={updatingId === b._id}
    className={`border px-2 py-2 rounded font-bold ${
      b.status === "pending"
        ? "text-yellow-600"
        : b.status === "confirmed"
        ? "text-blue-600"
        : b.status === "completed"
        ? "text-green-600"
        : b.status === "canceled"
        ? "text-red-600"
        : "text-black"
    }`}
  >
    <option value="pending">Pending</option>
    <option value="confirmed">Confirmed</option>
    <option value="completed">Completed</option>
    <option value="canceled">Canceled</option>
  </select>
</td>

              <td>{new Date(b.date).toLocaleString()}</td>
              <td>
                <button
                  onClick={() => deleteBookingMutation.mutate(b._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     </div>
    </div>
  );
};

export default ManageBooking;
