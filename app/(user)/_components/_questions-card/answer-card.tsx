import { Avatar } from '@/components/ui/avatar';
import { AvatarImage } from '@/components/ui/avatar';

type AnswerCardProps = {
  answer: {
    id: string;
    content: string;
    username: string;
    profilePicture: string;
  };
};

export default function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <div className=" pl-6 border-l">
      <div className="flex items-start gap-2 mb-2">
        <Avatar>
          <AvatarImage src={answer.profilePicture} alt={answer.username} />
        </Avatar>
        <div className="flex flex-col justify-center items-start ml-2">
          <h4 className="font-semibold mb-1">{answer.username}</h4>
          <p className="text-gray-600">{answer.content}</p>
        </div>
      </div>
    </div>
  );
}
