import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import Navbar from '../components/Navbar';
import { useStyles } from '../styles/pageStyles';

export default function About() {
	const classes = useStyles();
	document.title = 'About Solutus';

	return (
		<div className={classes.root}>
			<Navbar />
			<Container className={classes.container}>
				<Box className={classes.boxes}>
					<Typography className={classes.header}>
						<span className={classes.hypetag}>
							About the Company
						</span>
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.hypetag}>
						SolutuS LLC
					</Typography>
					<hr />
					<Typography>
						Solutus LLC is (currently) a one-person show based in
						the western suburbs of Minneapolis / St Paul, MN, USA
					</Typography>
					<Typography>
						If the job calls for more resources than one person can
						provide, I have access to a network of professionals
						that can help to serve your needs. Solutus specializes
						in building mobile and web applications geared toward
						small and medium sized businesses to aid in automation
						and information access within an organization. We are
						also able to generate static or dynamic websites for
						personal or professional use, and any use case in
						between.
					</Typography>
					<hr />
					<Typography>
						Established in 2020 with a recognition that mobile and
						web technologies are not only firmly rooted in today's
						culture but also the path forward for countless
						enterprises. A keen understanding of the current
						business landscape, the technologies involved, and
						anticipation of where the future may lead are what
						Solutus can offer you.
					</Typography>
				</Box>
				<Box className={classes.boxes}>
					<Typography className={classes.hypetag}>
						Cory Peterson, Owner
					</Typography>
					<hr />
					<Typography>
						As I approach how to think about my business and others,
						I have been particularly interested in{' '}
						<a
							href="https://www.youtube.com/results?search_query=simon+sinek"
							className={classes.speakerLink}
						>
							Simon Sinek's
						</a>{' '}
						'Infinite Mindset'. In less elegant language than he
						uses; the most successful companies don't focus to be
						better than their competition -- instead they strive to
					</Typography>
					<Typography className={classes.header}>
						be better tomorrow than they are today.
					</Typography>
					<Typography>
						Business does not have a winner and loser, there is no
						'end goal'. Business is a living thing, and the only
						pursuit of any business is to survive. Learning how to
						adapt to current circumstances and progress either
						because of or in spite of them is the mark of a good
						business. The ability to adapt is the indicator of a
						business that will not only survive, but thrive.
					</Typography>
					<hr />
					<Typography>
						I started Solutus as a passion project upon my exit from
						the wholesale distribution industry. As long as I can
						remember, I have been enamoured with technology. From my
						earliest days of writing BASIC on a Commodore 64 to
						following the newest trends in tech hardware and
						software it has always been at the core of my person
						even when I was engaged in other pursuits. I am a{' '}
						<span className={classes.hypetag}>
							Service-First
						</span>{' '}
						provider. I take great pride in delivering the desired
						results in the timeframe and budget agreed to. With
						experience of ten years of service and sales in addition
						to fifteen years of B2B brand building and management, I
						have a unique understanding of what challenges today's
						businesses face -- as well as their ability to overcome
						them. Let's face the future together.
					</Typography>
				</Box>
				<Box mt={2}>
					<Typography>Solutus LLC</Typography>
				</Box>
			</Container>
		</div>
	);
}
