export function formatName (profile) {
  return profile.alias ? `${profile.alias} (${profile.name})` : profile.name
}
