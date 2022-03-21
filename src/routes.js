import ModalLayout from "./layouts/ModalLayout";
import PlanPageOne from "./pages/PlanPageOne";
import SubscribePageTwo  from "./pages/SubscribePageTwo";
import PaymentPageThree from "./pages/PaymentPageThree";
import CompletePageLast  from "./pages/CompletePageLast";

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
           path: "finished",
           element: <CompletePageLast />
        },
      ],
    },
]

export default routes;