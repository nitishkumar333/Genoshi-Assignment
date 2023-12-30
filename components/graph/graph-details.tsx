export default function Details({ nodeDetails, params }: any) {
  return (
    <div className="max-w-2xl mx-auto absolute z-10 top-10 left-10">
      <div className="w-54">
        <div className="p-3 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
          {nodeDetails && (
            <ul className="space-y-2">
              <li>
                <span className="border-b-2 border-gray-900">{params?.title}</span>
              </li>
              <li>
                <span className="border-b-2 border-gray-900">
                  Index: {nodeDetails?.index}
                </span>
              </li>
              <li>
                <span className="border-b-2 border-gray-900">
                  Group: {nodeDetails?.group}
                </span>
              </li>
              <li>
                <span className="border-b-2 border-gray-900">
                  Id: {nodeDetails?.id}
                </span>
              </li>
              <li>
                <span className="border-b-2 border-gray-900">
                  Color: {nodeDetails?.color}
                </span>
              </li>
            </ul>
          )}
          {!nodeDetails && (
            <ul className="space-y-2">
              <li>
                <span className="border-b-2 border-gray-900">{params?.title}</span>
              </li>
              <li>
                <span>Select a Node to view it&apos;s details.</span>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
