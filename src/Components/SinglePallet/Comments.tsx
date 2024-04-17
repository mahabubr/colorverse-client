import { Button } from "@material-tailwind/react";
import { FormEvent, useState } from "react";
import { useCreateCommentsMutation } from "../../Redux/Features/Comments/commentsApi";
import { useMeQuery } from "../../Redux/Features/Auth/AuthApi";
import { toast } from "react-toastify";

const Comments = ({ id }: { id: string }) => {
  const [comment, setComment] = useState("");

  const { data: userData } = useMeQuery({});

  const [postComments] = useCreateCommentsMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      comment: comment,
      userId: userData?.data?.id,
      palletId: id,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postComments({ payload }).then((res: any) => {
      if (res?.data?.status === 200) {
        toast.success(res?.data?.message);
        setComment("");
      } else {
        toast.error(res?.data?.data);
      }
    });
  };

  return (
    <div className="lg:w-7/12 mx-auto ">
      <h2 className="text-xs text-center font-bold border-b">Comments</h2>
      <div className="mt-5 w-full">
        <form className="w-full bg-white rounded-md" onSubmit={handleSubmit}>
          <div className="">
            <textarea
              className="rounded-md border border-orange-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none text-xs "
              name="comment"
              placeholder="Type Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end mt-2">
            <Button
              type="submit"
              color="deep-orange"
              size="sm"
              variant="gradient"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="w-full lg:w-auto"
            >
              Post Comment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comments;
