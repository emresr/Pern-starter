import React, { useState } from "react";

const Header = () => {


	return (
		<div>
			<h1 className="text-center mt-5">Todo</h1>
			<div className="counter">
				<div className="count-left">
                 <span class="badge badge-primary">Total : </span>
				</div>
				<div className="count-right">
					<h5> Unfinished : 5 </h5>
				</div>
			</div>
		</div>
	);
};

export default Header;
