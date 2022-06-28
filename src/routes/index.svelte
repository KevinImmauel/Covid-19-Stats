<script>


	let country = "";
	var cases;
	var casestodayindia;
	var deathstoday;
	var recovered;
	var todayrecoveredindia;
	var activeindia;
	var totaldeaths;
	var todayCases;
	var active;
	var todayRecovered;
	var critical;



	const dataall = 'https://disease.sh/v3/covid-19/all'

	fetch(dataall)
		.then((response) => response.json())
		.then((data) => {
			totaldeaths = data["deaths"]
			todayCases = data["todayCases"]
			active = data["active"]
			todayRecovered = data["todayRecovered"]
			critical = data["critical"]
		})

	function search() {
		let datacountry = `https://disease.sh/v3/covid-19/countries/${country}`;

		fetch(datacountry)
			.then((response) => response.json())
			.then((data) => {
				cases = data["cases"];
				casestodayindia
		 = data["todayCases"];
				deathstoday = data["todayDeaths"];
				recovered = data["recovered"];
				todayrecoveredindia = data["todayrecoveredindia"];
				activeindia = data["activeindia"];
			});
	}
</script>

<div class="navbar p-4">
	<div class="navbar bg-base-300 rounded-box">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">Covid-19</a>
		</div>
	</div>
</div>

<div class="grid grid-cols-4 content-center">
	<div class="bg-base-300 p-6 rounded-box m-4 col-span-3">
		<div class="stats stats-vertical lg:stats-horizontal shadow">
			<div class="stat h-40 w-68">
				<div class="stat-title">New Cases Today</div>
				<div class="stat-value text-6xl">{todayCases%1000}K</div>
				<div class="stat-desc">↗︎ 40 (10%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Active Cases</div>
				<div class="stat-value text-6xl">{active%1000}K</div>
				<div class="stat-desc">↗︎ 400 (22%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Total Deaths</div>
				<div class="stat-value text-6xl">{totaldeaths%1000}K</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Today Recovered</div>
				<div class="stat-value text-6xl">{todayRecovered%1000}K</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Critical</div>
				<div class="stat-value text-6xl">{critical%1000}K</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>
		</div>
	</div>

	<div class="bg-base-300 p-6 rounded-box m-4">
		<div class="flex justify-between">
			USA <progress
				class="progress progress-primary w-72 ml-4"
				value="0"
				max="100"
			/>
		</div>
		<div class="flex justify-between">
			India <progress
				class="progress progress-primary w-72 ml-4"
				value="10"
				max="100"
			/>
		</div>
		<div class="flex justify-between">
			Brazil <progress
				class="progress progress-primary w-72 ml-4"
				value="40"
				max="100"
			/>
		</div>
		<div class="flex justify-between">
			France<progress
				class="progress progress-primary w-72 ml-4"
				value="70"
				max="100"
			/>
		</div>
		<div class="flex justify-between">
			Germany <progress
				class="progress progress-primary w-72 ml-4"
				value="100"
				max="100"
			/>
		</div>
		<div class="flex justify-between">
			UK <progress
				class="progress progress-primary w-72 ml-4"
				value="100"
				max="100"
			/>
		</div>
		<div class="flex justify-between">
			Russia <progress
				class="progress progress-primary w-72 ml-4"
				value="100"
				max="100"
			/>
		</div>
	</div>
</div>

<div class="grid grid-cols-5 content-center">
	<div class="form-control m-4 col-span-2">
		<div class="input-group">
			<input
				type="text"
				placeholder="Search…"
				class="input input-bordered w-full"
				bind:value={country}
			/>
			<button class="btn btn-square" on:click={search}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/></svg
				>
			</button>
		</div>
	</div>

	<div class="row-span-2 col-span-3 px-10 pt-4">
		<div class="shadow-lg rounded-lg overflow-hidden">
			<div class="py-3 px-5 bg-base-300">Line chart</div>
			<canvas class="p-10" id="chartLine"></canvas>
		  </div>
		  
		  <!-- Required chart.js -->
		  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
		  
		  <!-- Chart line -->
		  <script>
			const labels = ["January", "February", "March", "April"];
			const data = {
			  labels: labels,
			  datasets: [
				{
				  label: "My First dataset",
				  backgroundColor: "hsl(252, 82.9%, 67.8%)",
				  borderColor: "hsl(252, 82.9%, 67.8%)",
				  data: [0, 10, 5, 2, 20],
				},
			  ],
			};
		  
			const configLineChart = {
			  type: "line",
			  data,
			  options: {},
			};
		  
			var chartLine = new Chart(
			  document.getElementById("chartLine"),
			  configLineChart
			);
		  </script>
	</div>

	<div class="p-4 col-span-2">
		<div class="overflow-x-auto">
			<table class="table w-full">
				<thead>
					<tr>
						<th />
						<th>{country}</th>
						<th />
						<th />
						<th />
						<th />
					</tr>
				</thead>
				<tbody>
					<tr>
						<th class="bg-base-300">1</th>
						<td class="bg-base-300">Total Cases</td>
						<td class="bg-base-300">{cases}</td>
						<td class="bg-base-300 font-bold">4</td>
						<td class="bg-base-300">activeindia Cases</td>
						<td class="bg-base-300">{activeindia}</td>
					</tr>
					<!-- row 2 -->
					<tr>
						<th class="bg-base-300">2</th>
						<td class="bg-base-300">Total Recovered</td>
						<td class="bg-base-300">{recovered}</td>
						<td class="bg-base-300 font-bold">5</td>
						<td class="bg-base-300">Cases Today</td>
						<td class="bg-base-300">{casestodayindia
				}</td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th class="bg-base-300">3</th>
						<td class="bg-base-300">Total Deaths</td>
						<td class="bg-base-300">34749</td>
						<td class="bg-base-300 font-bold">6</td>
						<td class="bg-base-300">Deaths Today</td>
						<td class="bg-base-300">{deathstoday}</td>
					</tr>
					<tr>
						<th class="bg-base-300">3</th>
						<td class="bg-base-300">Total Deaths</td>
						<td class="bg-base-300">34749</td>
						<td class="bg-base-300 font-bold">6</td>
						<td class="bg-base-300">Deaths Today</td>
						<td class="bg-base-300">{deathstoday}</td>
					</tr>
					<tr>
						<th class="bg-base-300">3</th>
						<td class="bg-base-300">Total Deaths</td>
						<td class="bg-base-300">34749</td>
						<td class="bg-base-300 font-bold">6</td>
						<td class="bg-base-300">Deaths Today</td>
						<td class="bg-base-300">{deathstoday}</td>
					</tr>
					<tr>
						<th class="bg-base-300">3</th>
						<td class="bg-base-300">Total Deaths</td>
						<td class="bg-base-300">34749</td>
						<td class="bg-base-300 font-bold">6</td>
						<td class="bg-base-300">Deaths Today</td>
						<td class="bg-base-300">{deathstoday}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
