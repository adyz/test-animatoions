import { useTransition, animated } from "@react-spring/web";
import { useEvents } from "./useEvent";
import { items } from "./items";

export const ListAnimation = () => {
  const { events, currSecond } = useEvents(items);

  const transitions = useTransition(
    events.filter((e) => e.second >= currSecond - 2),
    {
      from: { opacity: 0 },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    }
  );

  return (
    <div>
      {events &&
        transitions((style, item) => (
          <animated.div key={item.eventId} style={style}>
            <div style={{ background: "#ccc" }}>{item.eventId}</div>
          </animated.div>
        ))}
      <p>curr: {currSecond}</p>
      <pre>{JSON.stringify(events, null, 2)}</pre>
    </div>
  );
};
