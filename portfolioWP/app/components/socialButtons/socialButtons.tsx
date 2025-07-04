import { motion } from "framer-motion";
import "./socialButtons.css";

export function SocialButtons() {
  return (
    <main>
      <div className="social-buttons">
        <div className="discordButton">
          <motion.button
            onClick={() =>
              window.open(
                "https://discord.com/channels/1254611066101436559/1254613997479661598",
                "_blank"
              )
            }
            className="px-6 py-2 rounded-md relative radial-gradient"
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileHover={{ scale: 1.15 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
              Discord
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
          </motion.button>
        </div>

        <div className="youtubeButton">
          <motion.button
            onClick={() =>
              window.open(
                "https://www.youtube.com/@kaijewl2/featured",
                "_blank"
              )
            }
            className="px-6 py-2 rounded-md relative radial-gradient"
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileHover={{ scale: 1.15 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
              Youtube
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
          </motion.button>
        </div>

        <div className="githubButton">
          <motion.button
            onClick={() => window.open("https://github.com/Kaijewl2", "_blank")}
            className="px-6 py-2 rounded-md relative radial-gradient"
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileHover={{ scale: 1.15 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
              GitHub
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
          </motion.button>
        </div>
      </div>
    </main>
  );
}
