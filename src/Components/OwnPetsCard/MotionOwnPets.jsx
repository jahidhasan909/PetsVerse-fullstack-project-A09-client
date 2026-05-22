'use client'
import { motion } from 'framer-motion'
import OwnPetsCard from './OwnPetsCard';

const MotionOwnPets = ({ ownListingpets }) => {
    return (
        <div>
            {
                ownListingpets.map((ownpets, index) => <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    key={ownpets._id}>
                    <OwnPetsCard key={ownpets._id} ownpets={ownpets}></OwnPetsCard>
                </motion.div>



                )
            }
        </div>
    );
};

export default MotionOwnPets;