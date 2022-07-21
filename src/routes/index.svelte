<script>
	let country = "";

	var totaldeaths;
	var todayCases;
	var active;
	var todayRecovered;
	var critical;

	var casescountry;
	var casestodaycountry;
	var deathstodaycountry;
	var todayrecoveredcountry;
	var recoveredcountry;
	var activecountry;
	var deathscountry;
	var criticalcountry;
	var casesPerOneMillioncountry;
	var deathsPerOneMillioncountry;
	var testsPerOneMillioncountry;
	var testscountry;

	const dataall = "https://disease.sh/v3/covid-19/all";

	fetch(dataall)
		.then((response) => response.json())
		.then((data) => {
			totaldeaths = data["deaths"];
			todayCases = data["todayCases"];
			active = data["active"];
			todayRecovered = data["todayRecovered"];
			critical = data["critical"];
		});

	function search() {
		let datacountry = `https://disease.sh/v3/covid-19/countries/${country}`;

		fetch(datacountry)
			.then((response) => response.json())
			.then((data) => {
				casescountry = data["cases"];
				casestodaycountry = data["todayCases"];
				deathstodaycountry = data["todayDeaths"];
				recoveredcountry = data["recovered"];
				todayrecoveredcountry = data["todayRecovered"];
				activecountry = data["active"];
				deathscountry = data["deaths"];
				criticalcountry = data["critical"];
				casesPerOneMillioncountry = data["casesPerOneMillion"];
				deathsPerOneMillioncountry = data["deathsPerOneMillion"];
				testsPerOneMillioncountry = data["testsPerOneMillion"];
				testscountry = data["tests"];
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
				<div class="stat-value text-6xl">{todayCases % 1000}K</div>
				<div class="stat-desc">↗︎ 40 (10%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Active Cases</div>
				<div class="stat-value text-6xl">{active % 1000}K</div>
				<div class="stat-desc">↗︎ 400 (22%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Total Deaths</div>
				<div class="stat-value text-6xl">{totaldeaths % 1000}K</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Today Recovered</div>
				<div class="stat-value text-6xl">{todayRecovered % 1000}K</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Critical</div>
				<div class="stat-value text-6xl">{critical % 1000}K</div>
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
			<div class="py-3 px-5 bg-base-300">
				Number of Cases since last 30 days
			</div>
			<canvas class="p-10" id="chartLine" />
		</div>

		<!-- Required chart.js -->
		<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

		<!-- Chart line -->
		<script>
			
			var datahistory = `https://disease.sh/v3/covid-19/historical/india`;

			var datalist = [];
			var labellist = [];

			fetch(datahistory)
				.then((response) => response.json())
				.then((data) => {
					for (
						let i = 0;
						i < Object.keys(data["timeline"]["cases"]).length;
						i++
					) {
						var j = Object.keys(data["timeline"]["cases"])[i];
						datalist.push(data["timeline"]["cases"][j]);
						labellist.push(
							j.slice(2, -1).slice(0, 2).replace("/", "")
						);
					}
				});

			const labels = labellist;
			const data = {
				labels: labels,
				datasets: [
					{
						label: "Past 30 days",
						backgroundColor: "hsl(252, 82.9%, 67.8%)",
						borderColor: "hsl(252, 82.9%, 67.8%)",
						data: datalist,
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
						<td class="bg-base-300">{casescountry}</td>
						<td class="bg-base-300 font-bold">7</td>
						<td class="bg-base-300">Active Cases</td>
						<td class="bg-base-300">{activecountry} </td>
					</tr>
					<!-- row 2 -->
					<tr>
						<th class="bg-base-300">2</th>
						<td class="bg-base-300">Total Recovered</td>
						<td class="bg-base-300">{recoveredcountry}</td>
						<td class="bg-base-300 font-bold">8</td>
						<td class="bg-base-300">Cases Today</td>
						<td class="bg-base-300">{todayrecoveredcountry} </td>
					</tr>
					<!-- row 3 -->
					<tr>
						<th class="bg-base-300">3</th>
						<td class="bg-base-300">Total Deaths</td>
						<td class="bg-base-300">{deathscountry}</td>
						<td class="bg-base-300 font-bold">9</td>
						<td class="bg-base-300">Deaths Today</td>
						<td class="bg-base-300">{deathstodaycountry}</td>
					</tr>
					<tr>
						<th class="bg-base-300">4</th>
						<td class="bg-base-300">Cases Per 1 Million</td>
						<td class="bg-base-300">{casesPerOneMillioncountry}</td>
						<td class="bg-base-300 font-bold">10</td>
						<td class="bg-base-300">New Cases Today</td>
						<td class="bg-base-300">{casestodaycountry}</td>
					</tr>
					<tr>
						<th class="bg-base-300">5</th>
						<td class="bg-base-300">Critical</td>
						<td class="bg-base-300">{criticalcountry}</td>
						<td class="bg-base-300 font-bold">11</td>
						<td class="bg-base-300">Deaths Per 1 Million</td>
						<td class="bg-base-300">{deathsPerOneMillioncountry}</td
						>
					</tr>
					<tr>
						<th class="bg-base-300">6</th>
						<td class="bg-base-300">Tests</td>
						<td class="bg-base-300">{testscountry}</td>
						<td class="bg-base-300 font-bold">12</td>
						<td class="bg-base-300">Tests Per 1 Million</td>
						<td class="bg-base-300">{testsPerOneMillioncountry}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
