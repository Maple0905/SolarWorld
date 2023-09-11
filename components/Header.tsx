export default function Header() {
	return (
		<div className="hidden md:block md:flex w-full items-center justify-between px-12 py-3 bg-gray-100">
			<div className="flex items-center text-md">
				<p className="font-semibold">Call Us:</p>
				<a href="tel:+000111333" className="pl-2">000 111 333</a>
				<p className="font-semibold pl-20">Send an Email:</p>
				<a href="mailto:solarworld@gmail.com" className="pl-2">solarworld@gmail.com</a>
			</div>
			<div className="flex items-center text-md">
				<div className="flex items-center">
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.5 2C8.1 2 4.5 5.6 4.5 10C4.5 15.4 11.5 21.5 11.8 21.8C12 21.9 12.3 22 12.5 22C12.7 22 13 21.9 13.2 21.8C13.5 21.5 20.5 15.4 20.5 10C20.5 5.6 16.9 2 12.5 2ZM12.5 19.7C10.4 17.7 6.5 13.4 6.5 10C6.5 6.7 9.2 4 12.5 4C15.8 4 18.5 6.7 18.5 10C18.5 13.3 14.6 17.7 12.5 19.7ZM12.5 6C10.3 6 8.5 7.8 8.5 10C8.5 12.2 10.3 14 12.5 14C14.7 14 16.5 12.2 16.5 10C16.5 7.8 14.7 6 12.5 6ZM12.5 12C11.4 12 10.5 11.1 10.5 10C10.5 8.9 11.4 8 12.5 8C13.6 8 14.5 8.9 14.5 10C14.5 11.1 13.6 12 12.5 12Z" fill="#0D0D0D"/>
					</svg>
					<a href="#" className="font-semibold pl-1">Location On Map</a>
				</div>
				<div className="flex items-center pl-10">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C12.5523 6 13 6.44772 13 7V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="#0D0D0D"/>
					</svg>
					<a href="#" className="font-semibold pl-1">Working Hours</a>
				</div>
			</div>
		</div>
	)
}
