<script>
	let country = "India";
	var cases = 0;
	var casestoday = 0;
	var deathstoday = 0;
	var recovered = 0;
	var todayRecovered = 0;
	var active = 0;

	function search() {
		let datacountry = `https://disease.sh/v3/covid-19/countries/${country}`;

		fetch(datacountry)
			.then((response) => response.json())
			.then((data) => {
				cases = data["cases"];
				casestoday = data["todayCases"];
				deathstoday = data["todayDeaths"];
				recovered = data["recovered"];
				todayRecovered = data["todayRecovered"];
				active = data["active"];
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

<div class="grid grid-cols-4 justify-center">
	<div class="bg-base-300 p-6 rounded-box m-4 col-span-3">
		<div class="stats stats-vertical lg:stats-horizontal shadow">
			<div class="stat h-40 w-68">
				<div class="stat-title">New Cases Today</div>
				<div class="stat-value text-6xl">54,875</div>
				<div class="stat-desc">↗︎ 40 (10%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Active Cases</div>
				<div class="stat-value text-6xl">4,200</div>
				<div class="stat-desc">↗︎ 400 (22%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Total Deaths</div>
				<div class="stat-value text-6xl">1,200</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Total Deaths</div>
				<div class="stat-value text-6xl">1,200</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>

			<div class="stat h-40 w-68">
				<div class="stat-title">Total Deaths</div>
				<div class="stat-value text-6xl">1,200</div>
				<div class="stat-desc">↘︎ 90 (14%)</div>
			</div>
		</div>
	</div>

	<div class="bg-base-300 p-6 rounded-box m-4">
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="0"
				max="100"
			/>
		</div>
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="10"
				max="100"
			/>
		</div>
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="40"
				max="100"
			/>
		</div>
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="70"
				max="100"
			/>
		</div>
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="100"
				max="100"
			/>
		</div>
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="100"
				max="100"
			/>
		</div>
		<div>
			Total Cases<progress
				class="progress progress-primary w-72 ml-4"
				value="100"
				max="100"
			/>
		</div>
	</div>
</div>

<div class="grid grid-cols-5 content-start">
	<div class="form-control m-4 col-span-2">
		<div class="input-group">
			<input
				type="text"
				placeholder="Search…"
				class="input input-bordered w-full"
			/>
			<button class="btn btn-square">
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

	<div class="row-span-2 col-span-3" />

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
						<td class="bg-base-300">Active Cases</td>
						<td class="bg-base-300">{active}</td>
					</tr>
					<!-- row 2 -->
					<tr>
						<th class="bg-base-300">2</th>
						<td class="bg-base-300">Total Recovered</td>
						<td class="bg-base-300">{recovered}</td>
						<td class="bg-base-300 font-bold">5</td>
						<td class="bg-base-300">Cases Today</td>
						<td class="bg-base-300">{casestoday}</td>
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
				</tbody>
			</table>
		</div>
	</div>
</div>
