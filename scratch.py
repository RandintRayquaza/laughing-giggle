import os
import re

directory = '/workspaces/laughing-giggle/skills/istm-workflow'
skills = ['audit', 'check', 'debug', 'develop', 'document', 'scope', 'sync', 'test']

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
            
            new_content = content
            for skill in skills:
                # Replace 'name: skill' -> 'name: istm-skill'
                new_content = re.sub(rf'^name:\s*{skill}\s*$', f'name: istm-{skill}', new_content, flags=re.MULTILINE)
                
                # Replace '/skill' -> '/istm-skill'
                new_content = re.sub(rf'/{skill}\b', f'/istm-{skill}', new_content)
                
                # Replace 'name: "skill"' -> 'name: "istm-skill"' (just in case)
                new_content = re.sub(rf'^name:\s*"{skill}"\s*$', f'name: "istm-{skill}"', new_content, flags=re.MULTILINE)
                
                # Replace name in title '# /skill' -> '# /istm-skill'
                new_content = re.sub(rf'^#\s*/{skill}\b', f'# /istm-{skill}', new_content, flags=re.MULTILINE)

            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Updated {filepath}")
