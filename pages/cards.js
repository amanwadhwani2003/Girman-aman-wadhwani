// pages/cards.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Searchnav from './components/Searchnav'
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CardsPage() {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // State for selected user
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (search) {
          const response = await fetch(`/api/users?search=${search}`);
          const data = await response.json();
          setFilteredData(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]);

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <Searchnav />
      <div className="cards-container">
        {filteredData.length > 0 ? (
          filteredData.map(user => (
            <div className="card flex flex-col justify-between" key={user.contact_number}>
              <div className="card-header">
                <div className="image">
                  <Image className="card-image" src="/media/ProfileImage.jpg" alt="Profile Image" width={50} height={50} />
                </div>
                <div className="name">{`${user.first_name} ${user.last_name}`}</div>
                <div className="location flex">
                  <Image src="/media/location.svg" alt="Location" width={15} height={15} /> {user.city}
                </div>
              </div>
              <span className="w-full border-slate-200 border-2"></span>
              <div className="card-footer-div flex justify-between">
                <div>
                  <div className="contact-number flex gap-1">
                    <Image src="/media/call.svg" alt="Contact" width={17} height={17} /> {user.contact_number}
                  </div>
                  <div className="availability text-xs text-gray-600">Available on Phone</div>
                </div>
                <div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="text-white bg-black font-normal px-2 py-2 text-xs rounded-md hover:bg-gray-800"
                        onClick={() => handleFetchDetails(user)} >
                        Fetch Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Fetch Details</DialogTitle>
                        <DialogDescription>
                          Here are  the details of the following employee.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-2 py-2">
                        {selectedUser && (
                          <div className="grid grid-cols-1 items-center gap-0">
                            <div className="detail-item">First Name: {selectedUser.first_name}</div>
                            <div className="detail-item">Last Name: {selectedUser.last_name}</div>
                            <div className="detail-item">City: {selectedUser.city}</div>
                            <div className="detail-item">Contact Number: {selectedUser.contact_number}</div>
                            <div className="detail-item py-3">Profile Image: <Image src={"/media/ProfileImage.jpg"} alt='Profile Image' width={140} height={140} /></div>
                          </div>
                        )}
                      </div>
                      <DialogFooter>
                        <DialogPrimitive.Close>
                        <Button type="button">Close</Button>
                        </DialogPrimitive.Close>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Image src={"/media/notfound.png"} alt='User not found!' width={400} height={400} />
        )}
      </div>
    </>
  );
}
