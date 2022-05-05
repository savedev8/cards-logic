import ModalLayout from "./layouts/ModalLayout";
import PlanPageOne from "./pages/PlanPageOne";
import SubscribePageTwo  from "./pages/SubscribePageTwo";
import PaymentPageThree from "./pages/PaymentPageThree";
import CompletePageLast  from "./pages/CompletePageLast";
import RequestSub  from "./components/shared/RequestSub";
import { ModalFininshLayout } from "./layouts/ModalFinishLayout";

const routes = [
    {
      path: "/",
      element: <ModalLayout />,
      children: [
        {
          path: "/",
          element: <PlanPageOne />,
        },
        {
            path: "subscribe",
            element: <SubscribePageTwo />
        },
          {
            path: "payment",
            element: <PaymentPageThree />
         },
         {
          path: "requests",
          element: <RequestSub />
       },
      ],
    },
    {
      element: <ModalFininshLayout />,
      children: [
        {
          path: 'finished',
          element: <CompletePageLast />
        },
      ],
    }
];

export default routes;